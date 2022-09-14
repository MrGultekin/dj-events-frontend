import {useRouter} from "next/router";

export default function EventPage() {
	const router = useRouter();
	console.log(router)
	return (
		<div>
			<h1>My Single Event</h1>
			<button onClick={()=>router.push('/')}>Click to go to HOME</button>
		</div>
	);
}

