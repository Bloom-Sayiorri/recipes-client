import { EyeIcon } from "@heroicons/react/24/outline";

export default function Login() {
	const handleChange = () => {};
	const handleSubmit = () => {};

	return (
		<main>
			<h2 className="">Login</h2>
			<form onSubmit={handleSubmit} className="">
				<label htmlFor="email" className="">
					Email
				</label>
				<input type="email" id="email" name="email" onChange={handleChange} required className="" />
				<label htmlFor="" className="">
					Password
				</label>
				<input type="password" id="password" name="password" onChange={handleChange} required className="" />
				<EyeIcon />
				<button type="submit" className="text-white bg-blue-400 rounded-lg px-3 py-1.5 hover:bg-blue-">
					Submit
				</button>
			</form>
		</main>
	);
}