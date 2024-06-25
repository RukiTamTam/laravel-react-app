import { useState } from "react";
import { router } from "@inertiajs/react";

function Form() {
    const [values, setValues] = useState({
        name: "",
        email: "",
    });

    const handleChange = (event) => {
        const key = event.target.id;
        const value = event.target.value;

        setValues((values) => {
            return {
                ...values,
                [key]: value,
            };
        });
    };

    const handleSubmit = (event) => {
        try {
            event.preventDefault();
            router.post("/submit", values);
        } catch (error) {
            console.error("Message:", error);
        } finally {
            setValues(() => {
                return {
                    name: "",
                    email: "",
                };
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="form__input-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={values.name}
                        id="name"
                    />
                </div>

                <div className="form__input-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={values.email}
                        id="email"
                    />
                </div>

                <button type="submit" className="form__submit-button">
                    Submit Form
                </button>
            </form>
        </>
    );
}

export default Form;
