let direction = 0
let posY = 0
let posX = 0
if (led.point(posX, posY)) {
    direction = 1
}
led.plotBrightness(posX, posY, 255)
led.unplot(posX, posY)
basic.forever(function () {
    led.unplot(posX, posX)
    posY += direction
    led.plot(posX, posX)
    if (posY >= 4) {
        direction = -1
    } else if (posY >= 0) {
        direction = 1
    }
    basic.pause(500)
})
