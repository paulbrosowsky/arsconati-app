const artFiles = import.meta.glob('./art/*.json')
const historyFiles = import.meta.glob('./history/*.json')
const exhibitFiles = import.meta.glob('./exhibits/*.json')

export async function getArtSections() {
  return await getData(artFiles)
}

export async function getHistorySections() {
  return await getData(historyFiles)
}

export async function getExhibits() {
  return await getData(exhibitFiles)
}

async function getData(files) {
  const returnData = []

  for (const file in files) {
    files[file]().then((data) => {
      returnData.push(JSON.parse(JSON.stringify(data)).default)
    })
  }

  return returnData
}
