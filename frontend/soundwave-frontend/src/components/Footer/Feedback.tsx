import{ useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you can implement the logic to submit the feedback
    console.log("Feedback submitted:", feedback);
    // Optionally, you can display a confirmation message to the user
    alert("Thank you for your feedback!");
    // Clear the feedback input field after submission
    setFeedback('');
  };

  return (
    <div className="mx-auto px-4 bg-primary p-10 shadow-secondary">
      <div className='max-w-2xl mx-auto p-10 mt-5 shadow-secondary rounded-lg'>
        <h2 className="text-2xl mb-6 text-secondary">Provide Feedback</h2>

        <p className="text-gray-600 mb-8">We'd love to hear from you! Please use the form below to share your thoughts, suggestions, or any issues you encountered while using the Music App.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-600 mb-2">Your Feedback</label>
            <textarea
              id="feedback"
              className="w-full bg-transparent shadow-secondary text-gray-600 rounded-md py-2 px-4 focus:outline-none"
            //   rows="5"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="bg-secondary hover:bg-hover text-white font-bold py-2 px-4 rounded inline-block transition-transform duration-300 hover:scale-110 shadow-secondary">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
