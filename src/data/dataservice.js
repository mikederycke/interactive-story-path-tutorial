
export default async function getData(){
    const resp = await fetch('./pathdata.json')
    return await resp.json()
}