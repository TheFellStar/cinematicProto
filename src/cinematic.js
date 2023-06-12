class Logo extends Phaser.Scene{
    constructor() {
        super('logo');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('logo', 'studio_logo_TEMP.png');
    }
    create(){
        this.logo = this.add.image(1000, 500, 'logo').setScale(.25);
        this.logo.setOrigin(0.5,0.5);
        const timeline = this.add.timeline([
            {
                at: 0,
                run: () => {this.cameras.main.fadeIn(1000,0,0,0);}
            },
            {
                at: 500,
                tween: {
                    targets: this.logo,
                    rotation: 6.28318531,
                    duration: 2000
                }
            },
            {
                at: 2500,
                run: () => {
                    this.cameras.main.fadeOut(1000,0,0,0);
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        this.scene.start('menu')
                    })
                }
            }
        ]);
        
        timeline.play();
    }
}

class Menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('time', 'time_turning_TEMP.gif');
        this.load.image('paper', 'paper_TEMP.png');
        this.load.image('clock', 'clock_TEMP.png');
    }
    create(){
        this.title = this.add.text(-500, 50, "Tale of Time").setFontSize(100);
        this.start = this.add.text(-300, 500, "Start", {color: '#ffffff'}).setFontSize(50);
        this.start.setInteractive();
        this.resume = this.add.text(-375, 575, "Resume").setFontSize(50);
        this.resume.setInteractive();
        this.options = this.add.text(-450, 650, "Options").setFontSize(50);
        this.options.setInteractive();
        this.exit = this.add.text(-525, 725, "Exit").setFontSize(50);
        this.exit.setInteractive();

        this.clock = this.add.image(1500, 700, 'clock').setScale(1);
        this.clock.setOrigin(0.5, 0.5);
        this.clock.angle = 25;
        this.paper = this.add.image(1825, 300, 'paper').setScale(0.3);
        this.paper.setOrigin(0.5,0.5);
        this.paper.angle = 300;
        this.paper = this.add.image(1300, 250, 'paper').setScale(0.3);
        this.paper.angle = 270;
        this.add.image(1100, 400, 'paper').setScale(0.3);
        this.paper = this.add.image(1600, 700, 'paper').setScale(0.3);
        this.paper.angle = 25;
        this.paper = this.add.image(1100, 750, 'paper').setScale(0.3);
        this.paper.flipX = true;
        this.paper = this.add. image(1700, 950, 'paper').setScale(0.3);
        this.paper.flipX = true;
        this.paper.angle = 350

        this.tweens.add({
            targets: this.title,
            x:50,
            y:50,
            duration:200,
            ease: 'Linear',
        })

        this.time.delayedCall(200, () => {
            this.tweens.add({
                targets: this.start,
                x:300,
                y:500,
                duration:200,
                ease: 'Linear',
            })
            this.tweens.add({
                targets: this.resume,
                x:375,
                y:575,
                duration:200,
                ease: 'Linear',
            })
            this.tweens.add({
                targets: this.options,
                x:450,
                y:650,
                duration:200,
                ease: 'Linear',
            })
            this.tweens.add({
                targets: this.exit,
                x:525,
                y:725,
                duration:200,
                ease: 'Linear',
            })
        })

        this.c1 = this.add.image(-500, 0, 'time').setScale(.2);

        this.start.on('pointerover', () =>{
            this.c1.destroy();
            this.c1 = this.add.image(250, 525, 'time').setScale(.1);
            this.resume.setColor('#ffffff');
            this.start.setColor('#86c5da');
            this.options.setColor('#ffffff');
            this.exit.setColor('#ffffff');
        })
        this.resume.on('pointerover', () => {
            this.c1.destroy();
            this.c1 = this.add.image(325, 600, 'time').setScale(.1);
            this.resume.setColor('#86c5da');
            this.start.setColor('#ffffff');
            this.options.setColor('#ffffff');
            this.exit.setColor('#ffffff');
        })
        this.options.on('pointerover', () => {
            this.c1.destroy();
            this.c1 = this.add.image(400, 675, 'time').setScale(.1);
            this.resume.setColor('#ffffff');
            this.start.setColor('#ffffff');
            this.options.setColor('#86c5da');
            this.exit.setColor('#ffffff');
        })
        this.exit.on('pointerover', () => {
            this.c1.destroy();
            this.c1 = this.add.image(475, 750, 'time').setScale(.1);
            this.resume.setColor('#ffffff');
            this.start.setColor('#ffffff');
            this.options.setColor('#ffffff');
            this.exit.setColor('#86c5da');
        })
        this.start.on('pointerdown', () => {
            this.c2 = this.add.image(-960, 540, 'time').setScale(2);
            const timeline = this.add.timeline([
                {
                    at: 0,
                    tween: {
                        targets: this.c2,
                        x: 2880,
                        duration: 2000
                    }
                },
                {
                    at: 1000,
                    run: () => {
                        this.cameras.main.fadeOut(1000,0,0,0);
                        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                            this.scene.start('scene1');
                        })
                    }
                }
            ]);
            
            timeline.play();
        })
    }
}

class Scene1 extends Phaser.Scene {
    constructor(){
        super('scene1');
    }
    preload(){

    }
    create(){
        this.cameras.main.fadeIn(1000,0,0,0);
        this.label = this.add.text(100, 200, '').setFontSize(40);
        this.typewriteText('You got the call late at night, some owner of a mansion has gone missing.\n\nThe normal investigator found no trail or trace of his wearabouts...\n\nLooks like it is up to you, the Time Investigation Agency to figure out\n\nwhat happened.');   
        
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('logo');
            })
        })
    }
    typewriteText(text){
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                this.label.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 100
        })
    }
}


let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: '#301934',
    scene: [ Logo, Menu, Scene1],
}

let game = new Phaser.Game(config);