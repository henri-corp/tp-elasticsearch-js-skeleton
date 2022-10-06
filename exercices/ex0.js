/**
 *
 * @param client Axios
 * @returns {Promise<void>}
 */
module.exports = async function (client) {

    // duplicate this file to add other exercices.
    // Use Axios
    const result = await client.request({
        method: "GET",
        url: '/_cat/indices',
        params: {format: "json"}
    });
    for (const indexInfo of result.data) {
        console.log(indexInfo.index+" => "+ indexInfo.health)
    }
    console.log("🎉 Exercice 0 is a sample on how to create a new file ".black.bgGreen);

}