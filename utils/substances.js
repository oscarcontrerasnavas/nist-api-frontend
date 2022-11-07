import axios from "axios";

const base_url = "nist-api.fly.dev";

export async function getAllPages() {
    const response = await axios.get(base_url + "/substances")
    const totalPages = await response.data.totalPages

    // Create an Array from 1 to totalPages
    let i = 0
    let pages = Array(totalPages)
    while (i < totalPages) pages[i++] = { params: { pageNumber: i.toString() } };

    return pages
}

export async function getPage(pageNumber) {
    const response = await axios.get(base_url + "/substances?per_page=10&page=" + pageNumber)
    const currentPage = await response.data.currentPage
    const totalPages = await response.data.totalPages
    const itemsPerPage = await response.data.itemsPerPage
    const itemsInPage = await response.data.itemsInPage
    const totalItems = await response.data.totalItems
    const substances = await response.data.items

    return {
        currentPage,
        totalPages,
        itemsPerPage,
        itemsInPage,
        totalItems,
        substances,
    }
}

export async function getSubstance(casNumber) {
    casNumber = casNumber.toString()
    const response = await axios.get(
        base_url +
        `/crawl.json?spider_name=webbook_nist&start_requests=true&crawl_args={\"cas\":\"${casNumber}\"}`
    )

    return response.data.items[0]
}

export async function getAllCasNumbers() {
    const response = await axios.get(base_url + "/substances")
    const totalItems = await response.data.totalItems
    const responseNotPaginated = await axios.get(base_url + "/substances?per_page=" + totalItems)
    const items = await responseNotPaginated.data.items

    // Create array of CAS numbers
    let casNumbers = await items.map(substance => ({ params: { casNumber: substance.cas.toString() } }))

    return casNumbers
}