/* I love TypeScript */

async function getData() {
    const url = '../data/data.json'
    try {

        const response = await fetch(url)

        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        
        const json = await response.json()

        setData(json)

    } catch (error) {

        console.log(error.message)
    }
    
} 

getData()

async function setData(data) {
   /* dynamic logic */
}

