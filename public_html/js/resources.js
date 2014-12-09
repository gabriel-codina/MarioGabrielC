game.resources = [

	/* Graphics.  
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        //tiles
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        {name: "maptiles", type:"image", src: "data/img/maptiles.png"},
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles2.png"},
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        //players
        {name: "mario", type:"image", src: "data/img/player1.png"},
        {name: "myguy", type:"image", src: "data/img/playe.png"},
        //enemys
        {name: "slime", type:"image", src: "data/img/zombie.png"},
        {name: "fly", type:"image", src: "data/img/fly-spritesheet.png"},
        //items
        {name: "mushroom", type:"image", src: "data/img/box.png"},
        {name: "star", type:"image", src: "data/img/star.png"},
        {name: "item", type:"image", src: "data/img/item-spritesheet.png"},
        //screen images
        {name: "title-screen", type:"image", src: "data/img/background.title.jpg"},
        {name: "OVER-SCREEN", type:"image", src: "data/img/Game_Over.png"},
	/* Atlases 
	 * @example 
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        //settingup maps
        {name: "World_Map", type: "tmx", src: "data/map/World_Map.tmx"},
        {name: "GabrielLevel01", type: "tmx", src: "data/map/GabrielLevel01.tmx"},
        {name: "GabrielLevel03", type: "tmx", src: "data/map/GabrielLevel03.tmx"},
        {name: "GabrielLevel02", type: "tmx", src: "data/map/GabrielLevel02.tmx"},

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	
        //setting up back ground music.
        //you dont type inthe flile in src cause it takes it from name
        
        {name: "theme", type: "audio", src: "data/bgm/"},
        {name: "star", type: "audio", src: "data/bgm/"},

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
        //same as background music except sound fx only play once.
        {name: "jump", type: "audio", src: "data/sfx/"},
        {name: "death", type: "audio", src: "data/sfx/"}
];
