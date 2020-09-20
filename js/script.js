const flutterBar = document.querySelector('.bar-flutter')
const swiftBar = document.querySelector('.bar-swift')
const csharpBar = document.querySelector('.bar-csharp')
const photoshopBar = document.querySelector('.bar-photoshop')
const databaseBar = document.querySelector('.bar-database')

var t1 = new TimelineLite()

t1.fromTo(flutterBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
	.fromTo(swiftBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(88% - 6px)', ease: Power4.easeOut})
	.fromTo(csharpBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
	.fromTo(photoshopBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)', ease: Power4.easeOut})
	.fromTo(databaseBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(75% - 6px)', ease: Power4.easeOut})
