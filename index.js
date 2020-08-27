const input = document.getElementById("input")
let image = document.createElement("img")
input.onchange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (e) => {
        image.src = reader.result
    }
}

const convert = () => {
    const blackAndWhite = gpu.createKernel(function (img) {
        const pixel = img[this.thread.y][this.thread.x]
        
    }).setGraphical(true).setOutput([100, 100])
}