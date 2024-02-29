import { useState } from 'react';
import postPledge from '../api/post-pledge';

function NewPledgeForm({ projectId }) {
  const [pledgeAmount, setPledgeAmount] = useState('');
  const [pledgeComment, setPledgeComment] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const handlePledgeSubmit = async (event) => {
    event.preventDefault();
    try {
      await postPledge(pledgeAmount, pledgeComment, anonymous, projectId);
    } catch (error) {
      console.error('Error trying to create pledge', error);
    }

    location.reload();
  };

  return (
      <div className="mt-1">
          <h3 className="text-xl font-bold">Make a Pledge</h3>
          <form onSubmit={handlePledgeSubmit} className="space-y-4 mt-4">
              <div className="flex flex-col">
                  <label className="font-bold mb-2">Amount:</label>
                  <input 
                      type="number"
                      value={pledgeAmount}
                      onChange={(event) => setPledgeAmount(event.target.value)}
                      required
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="flex flex-col">
                  <label className="font-bold mb-2">Comment (optional):</label>
                  <input 
                      type="text"
                      value={pledgeComment}
                      onChange={(event) => setPledgeComment(event.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="flex items-center">
                  <input 
                      type="checkbox"
                      checked={anonymous}
                      onChange={(event) => {
                          setAnonymous(event.target.checked);
                          console.log('Anonymous:', event.target.checked);
                      }}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                  <label className="ml-2">Make my pledge anonymous</label>
              </div>

              <button 
                  type="submit"
                  onClick={handlePledgeSubmit}
                  className="mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{ backgroundColor: '#00bcd4' }}>
                  Make Pledge
              </button>
          </form>
      </div>
  );
}

export default NewPledgeForm;
