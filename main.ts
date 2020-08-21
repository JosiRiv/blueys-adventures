namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Wall, SpriteKind.Projectile, function (sprite, otherSprite) {
    Arrow.setPosition(154, randint(0, 115))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let Arrow: Sprite = null
scene.setBackgroundImage(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 1 1 1 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 
    5 5 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 
    5 5 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 4 4 4 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 e e e e e e 7 7 7 7 e 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e 7 7 7 7 7 7 7 e e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 7 7 7 7 e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b 6 b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b 4 4 4 4 4 4 4 b b b b b 4 4 4 4 4 4 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 
    c c c c c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c c c c 5 5 c c c c c c 5 5 5 5 5 5 5 5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c c c c c c c c c c c c c c c 5 c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 b b b b 6 6 6 6 6 b b b b 6 6 6 6 b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f e e e e e b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f e e e e b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f f e e e b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f f e e e b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e f f f f e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c f f c c c c f f f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e f f f f e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c f f f f c c f f f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c f f f f f c c f f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f f e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c f f f f f c c c f f f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f f f f e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c f f f f f c c c c f f f b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e f f f f f f e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c f f f f c c c c c f f b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e f f f f f f f f e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c f f f c c c c c c b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e f f f f f f f e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f c c c c c c c c c c c c c c c c c c c c f f f c c c c c b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e f f f f f f f e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e f f f f f f e e e b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e f f f f e e e e b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e f f f f e e e e b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f b b b b b b b b b b e e e e e e e e e e e e e e e e e e e f f f e e e e b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 8 1 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f b b b b b b b b b e e e e e e e e e e e e e e e e e e e e f e e e e e b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f f b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f f b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b f f f b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f f b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f f b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f f b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f f f b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f f b b b b 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c f f f f f c c c c c c c c c c c c c c c b b b b b b b b f f f f f f f b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f f b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c f f f f f f f c c c c c c c c c c c c c c b b b b b b b b f f f f f f f f b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f b b b b 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c f f f f f f f f c c c c c c c c c c c c c b b b b b b b b b f f f f f f f f f b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f f b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c f f f f f f f f c c c c c c c c c c c c c b b b b b b b b b f f f f f f f f f b b b e e e e e e f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b f f f f f b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c f f f f f f f f f c c c c c c c c c c c c b b b b b b b b b f f f f f f f f f b b e e e e e e f f f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b f f f f f b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c f f f f f f f f f c c c c c c c c c c c c b b b b b b b b b f f f f f f f f b b b e e e e e f f f f f f e e e e e e e e e e e e e e e e e e b b b b b b b b b b b f f f f f b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c f f f f f f f c c c c c c c c c c c c c b b b b b b b b b f f f f f f f b b b b e e e e e f f f f f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b b f f f f f b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c f f f f c c c c c c c c c c c c c c c b b b b b b b b b f f f f f f f b b b b e e e e e f f f f f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b b f f f f f b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b f f f f f f f f b b b b b b e e e e f f f f f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b b f f f f f b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b f f f f f f f f b b b b b b e e e e f f f f f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b f f f f f f b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b f f f f f f f f b b b b b e e e e f f f f f f e e e e e e e e e e e e e e e e e e e b b b b b b b b b f f f b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b f f f f f f f b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b f f f b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b f f f f f f b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b f f f f f b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f f c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f f c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 7 7 7 7 7 7 7 8 8 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 
    f f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
    f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 9 9 f f f . . . . 
    . . . f f f 9 9 9 9 f f f . . . 
    . . f f f 9 9 9 9 9 9 f f f . . 
    . . f f 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 f 9 9 9 f 9 9 9 f . . 
    . . f 9 9 f 9 9 9 f 9 9 9 f . . 
    . f f 9 9 9 9 9 9 9 9 9 9 f f . 
    . f 9 9 9 f f f f f 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
    . f 8 8 9 9 9 8 8 9 9 8 8 9 f . 
    f f 8 8 8 9 9 8 8 8 9 8 8 8 f f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    `, SpriteKind.Player)
mySprite.setPosition(14, 112)
controller.moveSprite(mySprite)
game.splash("The longer you make it without being hit by an arrow, the greater your score!")
Arrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 1 . . . . . . . . . 4 4 
    . . 1 1 . . . . . . . . . 4 4 4 
    . 1 1 e e e e e e e e e e e . . 
    . . 1 1 . . . . . . . . . 4 4 4 
    . . . 1 1 . . . . . . . . . 4 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
Arrow.setVelocity(-100, 0)
Arrow.setPosition(154, 65)
let Walla = sprites.create(img`
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    `, SpriteKind.Wall)
Walla.setPosition(0, 112)
let Wallb = sprites.create(img`
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    `, SpriteKind.Wall)
Wallb.setPosition(-1, 4)
info.setScore(0)
forever(function () {
    pause(1000)
    info.setScore(info.score() + 1)
})
