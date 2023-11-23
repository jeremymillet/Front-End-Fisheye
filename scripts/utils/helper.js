export async function getPhotographers() {
    try {
        const request = await fetch("../../data/photographers.json");
        const response = await request.json();
        return response
    }
    catch (error) {
        console.log(error);
    }
}