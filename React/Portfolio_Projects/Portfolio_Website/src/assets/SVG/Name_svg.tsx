// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useEffect } from 'react'

export const Name_svg = () => {


	useEffect(() => {

		document.querySelectorAll('#name-svg path').forEach((char, index) => {
			console.log(`number ${index} length is ${char.getTotalLength()}`)

			var length = char.getTotalLength();

			char.style.strokeDasharray = `${length}px`
			char.style.strokeDashoffset = `${length}px`
		})
	}, [])

	return (
		<svg version="1.1" id="name-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			fill='none'
			viewBox="0 0 612 432" style={{ "enable-background": "new 0 0 612 432;" }}>
			<path className="st0" d="M139.4,261.5c-0.4,3.5,1.4,6.5,1.4,9.7c0,1.1,0.4,2.3-0.9,2.9c-1.2,0.5-2.3,0.2-3.3-0.6
	c-3.6-2.6-5.3-5.7-5.2-10.3c0.3-10.6,0.1-21.3,0.1-32.9c-1.4,2.5-2.3,4.3-3.3,6.1c-1.7,3.1-3.4,6.3-5.9,8.8
	c-0.7,0.7-0.8,1.6-1.2,2.4c-3,5.8-8,9.7-13,13.7c-0.7,0.6-1.7,0.6-3.1-0.7c10-12.2,12.9-27.7,19-41.9c-1.2-1.5-2.4-3.1-3.7-4.7
	c-1.4-1.8-1.6-3.8-1-6.1c-8.1-4-11.5-12.2-17.1-18.3c1.3-1.8,2.4-1.2,3.5-0.6c2.8,1.4,5.5,2.7,8.3,4.1c0.9,0.5,1.7,1,2.7,0.1
	c4-3.3,8.9-4.6,13.6-6.4c3.1-1.2,3.5-2.5,1.6-5.3c-1.4-2.1-3.7-3.1-5.8-4.5c0.4-0.6,0.6-1.1,0.9-1.2c5.1-1.8,4.7-6,4.6-10.2
	c0-1.6-1.1-2.1-2.4-1.9c-4.7,0.6-7.6-3-11.2-4.8c-0.7-0.3-1.2-1.4-0.8-2.4c0.6-1.4,1.8-2.2,3.3-2.1c3.4,0.2,6.4-1,9.4-2.2
	c2.9-1.2,3.5-3.2,2.6-5.7c-1.2-3.2-0.9-6.5-0.9-9.8c0-2.2,1.1-3,3.3-2.4c3.3,1,6.2,2.6,8.7,4.9c1.5,1.4,2.1,3.3,1.8,5.2
	c-0.4,2.2,0.5,2.9,2.3,3.3c0.9,0.2,1.7,0.8,2.5,0.8c3.3,0,3.4,2.2,3.4,4.6c0,1.2-0.5,1.9-1.7,2c-2.6,0.3-4.5,2-6.8,2.9
	c-1.3,0.5-1.4,1.5-1.4,2.7c0,1.6,0,3.2,0.1,4.8c0.1,3,0.7,3.6,3.6,2.7c3-0.9,6-1.3,9.1-1.5c3.8-0.3,7.3,1,10.7,2.3
	c4.1,1.5,5.1,4,3,8c-2.3,4.4-2.8,9.5-5.4,13.7c-2.8,4.6-4.5,9.7-7.1,14.3c-2,3.4-5.5,4.4-9,3.2c-3.7-1.2-8.5,1.7-8.9,5.6
	c-1.1,13.7-1.9,27.4-1.3,41.2C138.3,257.1,139,259.2,139.4,261.5 M148.7,186.2c-0.8,2.1-2.3,3.7-4.1,5.1c-3.7,2.9-2.2,7.2-3.8,10.9
	c4.5-0.4,8.5-3,9.3-6c1.9-6.8,2.2-13.8,3.4-20.7c0.1-0.6,0-1.2-0.8-1.6c-2.3,0.1-3.9,2.5-6.3,2.7c-1.9,0.1-3.1,0.9-3.5,3
	c-0.3,2.3,1,3.2,2.8,3.9C146.9,183.9,148.5,184,148.7,186.2 M127,196.8c-1.8-0.6-4,0.3-4.3,1.8c-0.2,0.9-0.3,2.1,0.8,2.5
	c1.1,0.4,1.5-0.7,1.9-1.4C126,198.9,126.4,198,127,196.8 M128,208.4c-0.2,0.6-1.1,0.9-0.6,1.7c4.6-1.8,5.3-2.8,3.8-5.9
	C129.9,205.3,129.2,206.8,128,208.4z"/>
			<path className="st0" d="M510.9,188.6c-2-4.2-3.3-8.1-1.4-12.5c0.4-0.8,0.4-1.8,1.5-1.9c1.2-0.1,1.8,0.6,2.2,1.6
	c2.1,4.5,4.3,8.9,8.2,12.3c1.3,1.1,2.6,2,4.3,1.5c3.1-0.9,6.6-0.1,9.1-3.7c1.6-2.3,5.4-3.2,8.5-1.9c3.2,1.4,6.6,1.4,9.9,2.1
	c3,0.6,6,1.3,8.8,2.7c1.9,0.9,3.1,2.3,1.2,4.4c-0.2,0.2-0.4,0.5-0.4,0.8c-0.4,1.6,0.5,3.8-1.6,4.5c-2.4,0.8-4.9,0.5-7.4,0
	c-7.8-1.7-15.5-1.6-23.3,0.2c-1,0.2-1.8,0.7-2.1,1.8c-2,7.6-6.2,14.6-7.4,22.5c-0.1,0.7-0.3,1.4-0.4,2c-0.4,4,0.6,5,4.6,5
	c4.1-0.1,8.2-0.3,12.2-0.2c5.5,0.1,10.3,2.7,15.1,4.9c0.5,0.2,1,1,1.2,1.6c1,2.8-2.1,7.2-5.1,7.3c-5.6,0.3-11.3-0.8-16.9,0.6
	c-1.2,0.3-2.1-0.6-2.4-1.7c-0.4-1.5-1.4-1.6-2.7-1.7c-4.8-0.4-9.5,0.5-14.1,2c-2.3,0.8-4.7,1.5-7.1,2c-1.9,0.4-3.6-0.1-4.5-2
	c-0.9-1.9-1.9-3.7-2.7-5.6c-2.1-4.8-0.6-8.4,4.2-10.3c3.8-1.5,7.5-2.9,9.3-6.9c2.1-4.9,1.9-10.1,1.8-15.3c0-2.2-1.8-1.6-3.1-1
	c-5.9,2.7-12,5.3-17.8,8.3c-2.6,1.4-5.1,1.4-7.4,0.6c-4.2-1.5-7.8-4-10.2-7.9c-0.5-0.9-1-1.8-0.4-2.8c0.8-1.2,1.7-0.2,2.6,0
	c4.8,0.9,9.5,0.5,14-1.2c5.6-2.2,11.4-4.1,17.2-5.8C512.6,193.5,512.9,192.6,510.9,188.6z"/>
			<path className="st0" d="M60.8,203.6c-1.8-4.8-2.5-9.6-3.5-14.4c-0.2-0.8-0.3-1.9,0.8-2.3c0.8-0.4,1.6,0.1,2.2,0.6c1,1,2.3,1.9,2.8,3.1
	c2,5.4,5.9,9.6,8,14.9c0.4,1,0.7,2.4,2.4,2.2c1.4-0.2,2.5-1,2.8-2.4c1.1-4.3,2.4-8.6,2-13.2c-0.2-2.2-1.1-3.6-3-4.5
	c-6.2-3.1-8.2-9.2-5-15.4c1-2,2.2-4,2.3-6.6c-4.4,1.5-8.6,2.7-12.7,4.3c-2.3,0.9-4.5,0.8-6.7,0.8c-2.1,0-3.7-2.7-3.8-5.7
	c-0.1-2.3,1.8-1.8,2.9-2.1c6.5-2.1,12.5-5.5,19-7.8c1.5-0.5,3.1-1,4.6-1.2c3.2-0.4,4.7-3.4,7.6-4.2c0.2,0,0.3-0.2,0.5-0.3
	c1.3-0.6,12.8,3.2,13.5,4.5c0.4,0.6,0.4,1.4,0,2c-1.6,2.3-3.6,4.9-6.4,5c-4.9,0.2-6.7,3.8-9,6.9c-2.1,2.8-3.1,6.2-5.3,8.9
	c-1.6,1.9-0.8,5,1.6,5.6c9,2.6,10.2,12.6,8.3,19.6c-1.4,5.1-3.1,10.2-3.4,15.6c-0.1,1.9-1.2,3.1-3,3.7c-1.8,0.6-3.1-0.1-4.2-1.5
	c-0.6-0.7-1.1-1.7-2.4-1.9c-1.1,1.2-0.6,2.8-0.5,4.2c0.2,2.8-0.1,5.5-0.6,8.3c-0.8,5.4-1.5,10.8-1.9,16.2
	c-0.4,5.2-1.9,10.4-1.4,15.7c0.2,2.2,0,4.4,0.9,6.4c0.5,1.2,0.6,2.5,0.3,3.8c-0.5,2.8-3.1,3.7-5,1.7c-1.6-1.6-3.5-2.9-4.7-5
	c-1.4-2.4-1.9-4.8-1.1-7.4c3.9-11.8,4.2-23.9,4.4-36.2C64.2,218.1,63.2,210.9,60.8,203.6z"/>
			<path className="st0" d="M327.2,155.6c0.7,2.9-0.4,4.7-2.8,5.7c-2.1,0.9-3.1,2.5-3.9,4.6c-2.8,7.5-5.7,15-8.7,22.4
	c-1.5,3.7-4.9,4.5-8.4,2.4c-1.1-0.7-2-0.9-3.5-0.5c-4.5,1.1-8.7,3.3-13.4,3.7c-0.9,0.1-2,0.5-2.6-0.2c-2.4-2.5-5.8-3-8.8-4.4
	c-2.7-1.3-3.7-3.7-4.6-6.5c-1.6-5-4.5-9.5-7.1-14c-1.3-2.3-1.5-4.3-0.8-6.8c2.3,0.4,3.6,2,5.1,3.1c2.8,2.1,5.4,4.4,8.2,6.5
	c1.5,1.1,3.2,0.9,4.8,0.2c4.2-1.9,8.6-3.1,13-4.3c2.7-0.7,5.5-0.9,8,0.9c1,0.7,2.1,1.2,1.9,2.6c-0.1,1.4-1,2.2-2.2,2.6
	c-4.2,1.2-7.4,3.8-9.8,7.3c-0.6,0.8-1.6,1.6-1.4,3.1c3.1,0,6.1,0,9.1,0c0.2,0,0.5,0,0.6-0.1c1.5-2.9,5.5-3.4,6.6-6.4
	c1.9-5.2,3.3-10.6,3.5-16.2c0.1-2.6-1-3.3-3.4-3.1c-4.7,0.4-9.1,1.8-13.2,4.3c-2.9,1.8-3.4,1.7-4.9-1.4c-2.3-4.5-1.3-6.8,3.5-8.2
	c6.8-1.9,13.8-2.9,20.8-3.5C318.6,148.7,322.7,152.6,327.2,155.6 M286.1,178.6c0.3-0.8,1.4-1.1,1.1-2.3c-2.4-0.4-4.9,1.3-7.7-0.9
	c1.6,2.2,2.1,4.4,3.8,5.6C284.8,180.8,285.2,179.7,286.1,178.6z"/>
			<path className="st0" d="M334.9,263.2c-2.7,0.3-2.9-0.8-1.7-2.6c0.7-1,1.5-1.8,1.7-3.3c-2.3-1-4.7-1.2-7-1.2c-3.2-0.1-6.4-0.3-9.5-1
	c-1.1-0.2-2.4-0.3-3.6-0.1c-6.9,0.8-13.9,1.1-20.7,2.5c-9,1.8-18.2,2.9-26.9,6.2c-3,1.1-6.1,1.7-8.9,3.2c-1,0.6-2.1,0.4-3.1-0.3
	c-1.2-0.8-2.4-6.4-1.6-8.2c1-2.4,3.4-2.8,5.5-2.6c1.4,0.1,2.5,0,3.6-0.6c4.3-2,9-3.3,12.6-6.5c1.1-0.9,2.7-0.6,4.1-2
	c-3.4-3.3-2.1-7-0.7-10.9c0.5-1.4,0.2-3.2,0.3-4.7c0-1,0.1-2,1.2-2.5c1-0.5,1.9-0.1,2.8,0.5c5.2,3.8,6.9,12.5,3.6,17.8
	c-0.9,1.5-2.5,2.1-4.4,2.1c4,4.1,9.8,3.4,12.3-1.4c3-5.7,7.2-10.7,9.1-17.1c0.5-1.7,0.6-3.3,0.9-5c0.4-1.9,1.5-2.8,3.3-2.7
	c2.8,0.2,5.3,1.4,6.8,3.7c1.3,2.1,0.4,4.3-0.7,6.5c-2.7,5.7-8.2,8.5-12.4,12.5c-1.3,1.2-2.6,2.3-3.6,4c5.6-0.4,11.2-1,16.8-1.3
	c6.5-0.4,12.9-0.7,19.3,0.6c2.3,0.5,4.8,0.4,7.1,0.6c4.7,0.3,8.3,2.8,12,5.4c0.6,0.4,1.4,1,1,1.6c-1.1,1.5-0.1,2.8,0.1,4.9
	C347.6,260.8,340.9,258.5,334.9,263.2z"/>
			<path className="st0" d="M440.1,213.2c-3.6,7.7-8.5,14.2-14.2,20c-2.4,2.5-4.7,5.6-8.4,6.8c-1.2,0.4-2.5,1.2-3.5-0.1
	c-1-1.4-0.2-2.6,0.8-3.7c4.2-4.3,7.6-9.2,10.9-14.2c8.1-12.7,13.9-26.5,18.9-40.6c0.8-2.2,1.2-4.3-0.4-6.5c-1.6-2,0.2-3.8,1.5-4.5
	c4.5-2.5,3.8-7.1,4.6-10.9c0.7-3.5,1.6-6.9,1.9-10.5c0.1-1.2,0.6-2.3,0.2-3.5c-0.3-1,0.1-1.7,0.9-2.3c0.9-0.6,1.7-0.5,2.5,0.1
	c3.6,3,7.6,5.7,10.2,9.6c2.1,3.1,1.5,7.1,0.5,10.6c-1.6,5.6-5.5,10.1-8,15.3C452.8,190.4,445.6,201.3,440.1,213.2z"/>
			<path className="st0" d="M503.7,160.9c1.9-4.1,3.8-7.9,5.5-11.8c0.7-1.5,1-3.2,0.2-4.9c-0.7-1.5,0-2.4,1.5-2.5c2.3-0.2,4.5-0.4,6.7,0.7
	c1.7,0.9,3.7,1.5,5.5,2.1c3.6,1.2,5.8,4,5.8,7.6c0,2.2-0.5,4-2.9,5c-9.8,4.2-17.7,11.2-26,17.6c-1.1,0.8-1.6,1.9-2.3,3.1
	c-1.5,2.9-4.1,4.4-7.7,4.5C494.8,175.4,500,168.8,503.7,160.9z"/>
			<path className="st0" d="M457.2,250.6c0,3,0,5.6,0.9,8.3c0.4,1.3,0.3,2.8,0.3,4.1c0,1.8-0.9,3.2-2.4,3.8c-1.5,0.6-3-0.4-3.7-1.4
	c-2.5-3.7-4.2-7.8-5.5-12.1c-0.1-0.3,0-0.8,0.2-1.2c3.2-5.9,3.2-12.3,3.4-18.8c0.2-5.7-1.8-10.5-5.5-14.6c-0.8-0.9-2-1.7-1.9-3.6
	c3.5-0.2,6.8,0.8,9.1,3.1c5,5.1,9.5,10.3,6.7,18.6C457.5,241,456.7,245.7,457.2,250.6z"/>
			<path className="st0" d="M320.1,211.1c-1.4,1.2-2.8,1.7-4.5,1.9c-5.2,0.7-10.3,1.7-15.1,4c-5.7,2.6-11.9,2.8-17.9,3.9
	c-3.1,0.6-4.5-2.1-6.1-3.9c-0.8-0.9-0.4-2.2,0.5-3c2.7-2.4,5.7-4.2,9.3-5.1c1-0.2,2.1-0.4,2.9,0.1c3.2,2.4,6,0.5,8.9-0.6
	c4.6-1.8,9.2-3.5,14.2-4c3.2-0.4,5.6,1.2,7.9,2.9C321.7,208.4,321.2,209.7,320.1,211.1z"/>
			<path className="st0" d="M180.9,238.9c3.2,1.9,6.3,3.5,9.2,5.3c3.3,2.1,3.5,3.8,1.4,6.8c-0.1,0.1-0.2,0.2-0.2,0.2
	c0.3,4.9-3.5,2.9-5.8,3.7c-3.1,1-5.7-0.7-8.6-0.6c-1,0-1.7-0.7-2.1-1.4c-3.2-4.9-6.2-9.9-8.1-15.5c-0.9-2.6-0.1-3.7,2.6-3
	C173.1,235.5,177.2,236.3,180.9,238.9z"/>
			<path className="st0" d="M292.5,196.5c1.6,1,3.1,1.8,4.5,2.7c1.2,0.8,2.1,1.9,1.7,3.5c-0.4,1.5-1.6,2.2-3.1,2.5
	c-4,0.8-10.6-3.7-11.4-7.8c-0.3-1.6,0.4-2.2,1.8-2.4C288.3,194.7,290.4,195.1,292.5,196.5z"/>
		</svg>
	)
}
