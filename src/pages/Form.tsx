export default function Form() {
	const handleChange = () => {};
	const handleSubmit = () => {};

	return (
		<main className="">
			<h2 className="">New Recipe</h2>
			<form onSubmit={handleSubmit} className="">
				<label htmlFor="" className=""></label>
				<input
					type="text"
					id=""
					name=""
					onChange={handleChange}
					required
					className=""
				/>
				<button type="submit" className="">
					Submit
				</button>
			</form>
		</main>
	);
}

