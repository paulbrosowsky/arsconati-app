const sectionFiles = import.meta.glob('./sections/*.json')
const exhibitFiles = import.meta.glob('./exhibits/*.json')

export async function getSections() {
  return await getData(sectionFiles)
}
export const exhibits = getData(exhibitFiles)

async function getData(files) {
  const returnData = []

  for (const file in files) {
    files[file]().then((data) => {
      returnData.push(JSON.parse(JSON.stringify(data)).default)
    })
  }

  return returnData
}
