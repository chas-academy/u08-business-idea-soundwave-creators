import React from 'react';

interface UserDashboardProps {
    fullName: string;
    emailAddress: string;
    createdAt: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ fullName, emailAddress, createdAt }) => {
    // Mock data for saved songs
    const savedSongs: string[] = ["Song 1", "Song 2", "Song 3"];

    // Function to handle removing a saved song
    const handleRemoveSong = (songIndex: number) => {
        // Remove the song from the savedSongs array
        savedSongs.splice(songIndex, 1);
        // Force component to re-render
        forceUpdate();
    };

    return (
        <div className="justify-center items-center bg-primary px-8 py-12">
            <section className="shadow-secondary mt-7  rounded-xl   dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
                <div className="px-4 py-5 sm:px-8">
      
                    <p className="block text-m font-bold px-4 pb-auto mt-8 max-w-2xl text-2xl text-gray-300">
                        User's Details and information
                    </p>
                </div>
                <div className="px-9 py-1 pt-auto border-gray-200 rounded-xl">
                    <dl className=" border-2 border-secondary shadow-secondary bg-trasnparentext-sm font-medium text-gray-500  w-full mt-3 mb-4 px-3 py-2 rounded-2xl  focus:outline-none">
                        <div className=" ">
                            <dt className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none">
                                Full name:
                            </dt>
                            <dd className="bg-trasnparen mt-1 text-m text-gray-300 sm:mt-0 sm:col-span-2">
                                check{fullName}
                            </dd>
                        </div>

                        <div className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none">
                            <dt className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none focus:border-secondary">
                                Email address:
                            </dt>
                            <dd className="bg-trasnparen  text-m text-gray-300 sm:mt-0 sm:col-span-2">
                               check {emailAddress}
                            </dd>
                        </div>
                        <div className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none">
                            <dt className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none focus:border-secondary">
                                Created at:
                            </dt>
                            <dd className="bg-trasnparen mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                                check{createdAt}
                            </dd>
                        </div>
                    </dl>
                </div>
                <dl className=" border-2 border-secondary shadow-secondary bg-trasnparentext-sm font-medium text-gray-500 ml-9 mr-9   mb-9 px-9 py-2 rounded-2xl  focus:outline-none">
                    <div>
                                    <label htmlFor="email" className="block text-m font-bold ml-4 pb-3 mt-3 dark:text-white text-secondary ">Forgot password?</label>
                                    <div className="relative rounded-2xl">
                                        <input type="email" id="email" name="email" placeholder="Email address" className="bg-trasnparentext-sm font-medium text-gray-700 w-full   mt-1 px-10 py-2 rounded-2xl  focus:outline-none focus:border-secondary" required aria-describedby="email-error" />
                                    </div>
                                </div>
                                <button type="button" className="transition-transform duration-300 hover:scale-110 shadow-secondary text-text  bg-secondary font-small w-full mt-2 mb-4 px-10 py-2 rounded-2xl hover:bg-hover focus:outline-none focus:bg-hover">
Reset</button>
                    </dl>
            </section>

            {/* <div className="shadow-secondary mt-9  rounded-xl   dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
                <div className="p-4 sm:p-9 rounded-2xl mt-9">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold  text-gray-300">Forgot password?</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                           
                        </p>
                    </div>

                    <div className="mt-5">
                        <form>
                            <div className="bg-transparent grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-m font-bold ml-1  dark:text-white text-secondary ">Email address</label>
                                    <div className="relative rounded-2xl">
                                        <input type="email" id="email" name="email" className="shadow-secondary bg-trasnparentext-sm font-medium text-gray-500  w-full mt-9 px-3 py-2 rounded-2xl  focus:outline-none focus:border-secondary" required aria-describedby="email-error" />
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>
                                <button type="button" className="transition-transform duration-300 hover:scale-110 shadow-secondary w-full mt-5 mb-9 bg-secondary text-text py-2 rounded-2xl hover:bg-hover focus:outline-none focus:bg-hover">
Reset password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            {/* Added div for saved songs */}
            <div className="shadow-secondary mt-9  rounded-xl   dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
                <div className="p-2 sm:p-2 rounded-2xl mt-2">
                    <div className="text-center">
                        <h1 className="block text-m font-bold  mt-8 max-w-2xl text-2xl text-gray-300">Saved Songs</h1>
                    </div>

                    <ul className="mt-5 text-center text-text2 pb-8">
                        {savedSongs.map((song, index) => (
                            <li key={index} className="mb-2">
                                {song}
                                <button onClick={() => handleRemoveSong(index)} className="ml-2 text-red-500">Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
function forceUpdate() {
    throw new Error('Function not implemented.');
}

