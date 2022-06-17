import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { SignUp } from "../../pages";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
            Promise.resolve({
                user: {
                    updatedProfile: jest.fn(() =>
                        Promise.resolve("I am signed up!")
                    ),
                },
            })
        ),
    })),
};

describe("<SignUp/>", () => {
    it("renders the signup page with a form submission", async () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <SignUp />
                </FirebaseContext.Provider>
            </Router>
        );

        await act(async () => {
            await fireEvent.change(getByPlaceholderText("First Name"), {
                target: { value: "Shanni" },
            });
            await fireEvent.change(getByPlaceholderText("Email address"), {
                target: { value: "liushanni33@gmail.com" },
            });
            await fireEvent.change(getByPlaceholderText("Password"), {
                target: { value: "password" },
            });

            fireEvent.click(getByTestId("sign-up"));
            expect(getByPlaceholderText("First Name").value).toBe("Shanni");
            expect(getByPlaceholderText("Email address").value).toBe(
                "liushanni33@gmail.com"
            );
            expect(getByPlaceholderText("Password").value).toBe("password");
            expect(queryByTestId("error")).toBeFalsy();
        });
    });
});
