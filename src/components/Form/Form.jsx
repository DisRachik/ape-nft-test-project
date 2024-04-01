import { Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import * as s from "./Form.styled";

import FoxIcon from "src/icons/meta-mask-color.svg?react";

const RegisterSchema = Yup.object().shape({
	discord: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.matches(/^@[a-zA-Z0-9]+$/, "Must start with @")
		.required("Wrong discord"),
	fox: Yup.string()
		.length(19, "Must exact 19 characters")
		.matches(/^[a-zA-Z0-9]+$/, "Must contain only letters and numbers")
		.required("Wrong address"),
});

export const Form = () => {
	const handleSubmit = (values, { resetForm }) => {
		resetForm();
		console.log(values);
		toast.success("We're glad to welcome you!", {
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
	};

	return (
		<>
			<Toaster position="bottom-center" reverseOrder={false} />
			<Formik
				initialValues={{
					discord: "",
					fox: "",
				}}
				validationSchema={RegisterSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched, isValid }) => (
					<s.Form autoComplete="off" noValidate>
						<s.FormField>
							<s.IconWrap>
								<s.DiscordIcon />
							</s.IconWrap>
							<s.Field
								type="text"
								name="discord"
								placeholder="@username"
								required
								error={errors.discord && touched.discord ? "true" : undefined}
							/>
							<s.ErrorMessage name="discord" component="div" />
						</s.FormField>

						<s.FormField>
							<s.IconWrap>
								<FoxIcon />
							</s.IconWrap>
							<s.Field
								type="text"
								name="fox"
								placeholder="Wallet address"
								required
								error={errors.fox && touched.fox ? "true" : undefined}
							/>
							<s.ErrorMessage name="fox" component="div" />
						</s.FormField>

						<s.Button type="submit">{isValid ? "MINT" : "ERROR"}</s.Button>
					</s.Form>
				)}
			</Formik>
		</>
	);
};
