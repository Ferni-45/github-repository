let NIckle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e 1 e e 1 e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e d d d d e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . . . . . e e . . . . . . . . 
    . . e e e e e e e e e e . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . e 5 5 3 3 5 5 . . . . . . 
    . . e e . . . . . e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(NIckle)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
