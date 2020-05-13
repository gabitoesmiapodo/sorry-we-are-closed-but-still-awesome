import htmlToImage from 'html-to-image'
import download from 'downloadjs'

export const printComponent = (printableComponentId, fileName = 'email.png') => {
  const printableArea = document.getElementById(printableComponentId)

  if (!printableArea) {
    console.error(`Couldn't find #${printableComponentId}`)
    return
  }

  htmlToImage
    .toPng(printableArea)
    .then((dataUrl) => {
      download(dataUrl, fileName)
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}
