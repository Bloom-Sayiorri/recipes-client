export default function Signup() {
	const handleChange = () => {};
	const handleSubmit = () => {};

	return (
		<main>
			<h2 className="">Signup</h2>
			<form onSubmit={handleSubmit} className="">
				<label htmlFor="" className="">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={handleChange}
					required
					className=""
				/>
				<label htmlFor="" className="">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={handleChange}
					required
					className=""
				/>
				<label htmlFor="password" className="">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					required
					className=""
				/>
				<button type="submit" className="text-white bg-blue-400 rounded-lg px-3 py-1.5 hover:bg-blue-600">
					Submit
				</button>
			</form>
		</main>
	);
}