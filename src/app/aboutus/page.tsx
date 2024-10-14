import Header from "../components/header"
export default function About() {
    return (
        <div>
            <Header />
            <div className="mt-10 flex flex-col items-center justify-center bg-gray
            -100">
                <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Welcome to our website! We are a team of passionate professionals dedicated to bringing you the best services and experiences.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Our mission is to deliver quality and excellence in everything we do. With years of expertise and commitment to innovation, we aim to help our customers achieve their goals.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        Whether you are looking for the latest technology solutions or creative ideas, we are here to assist you every step of the way.
                    </p>
                    <p className="text-lg text-gray-600">
                        Thank you for visiting our website. We look forward to serving you!
                    </p>
                </div>
            </div>


        </div>

    )
}