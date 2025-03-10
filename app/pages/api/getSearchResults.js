import Fuse from 'fuse.js';
import { auth, query, firestore, arrayUnion, getDocs, ref, updateDoc, doc, getDoc, collection, where } from '@/utils/firebase'
const API_URL = '';
let categories = []
const categoryKeywords = async() => {
    const categoryRef = collection(firestore, 'categories')
    const categorySnapshot = await getDocs(categoryRef)
    categories = categorySnapshot.docs.map((doc) => doc.data());
    console.log(categories)
    return categories
}

const fuseOptions = {
    includeScore: true,
    keys: ['name'],
};

export const getSearchResults = async(querydata, isanon) => {
    if (categories.length === 0) {
        await categoryKeywords();
    }
    const fuse = new Fuse(categories.map((category) => ({ name: category.name })), fuseOptions);
    console.log("fuse is ", fuse)

    const lowercaseQuery = querydata;
    const searchResults = fuse.search(lowercaseQuery);
    const matchedCategory = searchResults.length > 0 ? searchResults[0].item.name : '';
    console.log("this is the search results: ", searchResults)
    console.log("this is the matched category: ", matchedCategory)
    console.log(matchedCategory);

    try {
        const coursesRef = collection(firestore, 'courses');
        const catRef = collection(firestore, 'categories');

        const categorySnapshot = await getDocs(query(catRef, where('name', '==', matchedCategory)));
        const categoryDoc = categorySnapshot.docs[0].ref;
        console.log("category id is ", categoryDoc)
        if (categoryDoc) {
            const coursesSnapshot = await getDocs(query(coursesRef, where('categories', 'array-contains', categoryDoc)));
            const data = coursesSnapshot.docs.map((doc) => doc.data());
            console.log("am i is anon?", isanon)
            if (!isanon) {
                const { uid } = auth.currentUser
                console.log("the user is :", uid)
                console.log("about to save the catageroy")
                const userRef = doc(firestore, 'users', uid)
                const userSnapshot = await getDoc(userRef)
                const userDocRef = userSnapshot.ref
                await updateDoc(userDocRef, {
                    wordsSearched: arrayUnion(matchedCategory)
                })
            }
            return data;
        } else {
            throw new Error('Category not found');
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export default getSearchResults;