export default function Loading({ text }: { text: string }) {
	return (
		<div className="flex justify-center items-center w-full bg-slate-200 h-screen">
			<div className="text-4xl">{text}</div>
		</div>
	);
}

