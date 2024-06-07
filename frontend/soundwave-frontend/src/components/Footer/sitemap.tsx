// import React from 'react';
const Sitemap = () => {

    return (
        <div className="mx-auto px-4 py-8 bg-primary shadow-secondary">
            <h1 className="text-4xl text-secondary font-bold mb-8 text-center">Sitemap</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 pb-2 text-center text-secondary">Navbar</h2>
                <div className="shadow-secondary p-4 rounded-lg max-w-3xl mx-auto">
                    <ul className="list-disc list-inside ml-4">
                        <li className="text-secondary list-none mb-3">Search Bar
                            <ul className="list-disc list-inside ml-8 text-gray-600">
                                <li>Search by Song Title</li>
                                <li>Search by Artist Name</li>
                                <li>Search by Album Name</li>
                                <li>Results lead to Artist Page, Song Page, or Album Page</li>
                            </ul>
                        </li>
                        <li className="text-secondary list-none mb-3">Genre Button
                            <ul className="list-disc list-inside ml-8 text-gray-600">
                                <li>Dropdown with all music genres</li>
                                <li>Clicking a genre leads to Genre Page</li>
                                <li>Clicking a song on the Genre Page leads to Music Play Page</li>
                            </ul>
                        </li>
                        <li className="text-secondary list-none mb-3">Playlist Button (visible when logged in)
                            <ul className="list-disc list-inside ml-8 text-gray-600">
                                <li>Leads to User Playlist Page</li>
                            </ul>
                        </li>
                        <li className="text-secondary list-none mb-3">Profile Button
                            <ul className="list-disc list-inside ml-8 text-gray-600">
                                <li>When Logged Out
                                    <ul className="list-disc list-inside ml-8 text-gray-600">
                                        <li>Log In Link (Sign In Page) / Sign Up Link (Sign Up Page)</li>
                                        <li>Home Link (Home Page)</li>
                                    </ul>
                                </li>
                                <li>When Logged In as User
                                    <ul className="list-disc list-inside ml-8 text-gray-600">
                                        <li>Profile Link (User Profile Page)</li>
                                        <li>Logout Link</li>
                                        <li>Home Link (Home Page)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 pb-2 text-secondary text-center">Home Page</h2>
                <div className="shadow-secondary p-4 rounded-lg max-w-3xl mx-auto">
                    <ul className="list-inside ml-4 text-secondary list-none mb-3">
                        <li>Popular Artists Section
                            <ul className="list-disc list-inside ml-8 text-gray-600">
                                <li>Clicking an artist leads to Single Artist Page</li>
                            </ul>
                        </li>
                        <li>Popular Albums Section
                            <ul className="list-disc list-inside ml-8 text-gray-600">
                                <li>Clicking an album leads to Single Album Page</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 pb-2 text-secondary text-center">Footer</h2>
    <div className="shadow-secondary p-4 rounded-lg max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-around">
            <div className="w-full md:w-1/3 px-4 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-secondary">General Pages</h3>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                    <li>About Us </li>
                    <li>Contact Us </li>
                    <li>Home </li>
                    <li>FAQ </li>
                    <li>Feedback </li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-secondary">Support Pages</h3>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                    <li>Help and Support </li>
                    <li>Privacy Policy </li>
                    <li>Terms of Service </li>
                    <li>Subscribe </li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-secondary">Social Media</h3>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                    <li>Social Media Links
                        <ul className="list-disc list-inside ml-4 text-gray-600">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

            <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 pb-2 text-secondary text-center">Detailed Pages</h2>
    <div className="shadow-secondary p-4 rounded-lg max-w-3xl mx-auto">
        <ul className="list-inside ml-4 text-secondary list-none mb-3">
            <li>Artist Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Displays artist biography, popular songs, albums</li>
                </ul>
            </li>
            <li>Song Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Displays song details, play button, add to playlist option</li>
                </ul>
            </li>
            <li>Album Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Displays album details, list of songs</li>
                </ul>
            </li>
            <li>Genre Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Displays list of songs in the selected genre, option to add to playlist</li>
                </ul>
            </li>
            <li>User Playlist Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Displays user-created playlists, option to create new playlists, manage existing ones</li>
                </ul>
            </li>
            <li>Sign In Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>User login form</li>
                </ul>
            </li>
            <li>Sign Up Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>User registration form</li>
                </ul>
            </li>
            <li>About Us Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Information about the company, mission, and team</li>
                </ul>
            </li>
            <li>Contact Us Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Contact form, company contact details</li>
                </ul>
            </li>
            <li>FAQ Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>List of frequently asked questions and answers</li>
                </ul>
            </li>
            <li>Feedback Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Feedback form for user suggestions and comments</li>
                </ul>
            </li>
            <li>Help and Support Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Support resources, contact support</li>
                </ul>
            </li>
            <li>Privacy Policy Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Details about the app's privacy policies</li>
                </ul>
            </li>
            <li>Terms of Service Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>App's terms of service and usage policies</li>
                </ul>
            </li>
            <li>Subscribe Page
                <ul className="list-disc list-inside ml-8 text-gray-600">
                    <li>Subscription options and plans, sign-up form</li>
                </ul>
            </li>
        </ul>
    </div>
</section>
        </div>
    );
};

export default Sitemap;
