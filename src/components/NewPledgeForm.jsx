import { useState } from 'react';
import postPledge from '../api/post-pledge';
import getProject from '../api/get-project';

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
    <div>
      <h3>Make a Pledge:</h3>
      <form onSubmit={handlePledgeSubmit}>
                <label>
                    Amount:
                    <input 
                        type="number" 
                        value={pledgeAmount} 
                        onChange={(event) => setPledgeAmount(event.target.value)} 
                        required 
                    />
                </label>
                <br/>
                <label>
                    Comment (optional):
                    <input 
                        type="text" 
                        value={pledgeComment} 
                        onChange={(event) => setPledgeComment(event.target.value)} 
                    />
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        checked={anonymous} 
                        onChange={(event) => {
                            setAnonymous(event.target.checked);
                            console.log('Anonymous:', event.target.checked);
                        }}
                    />
                    Make my pledge anonymous
                </label>
                <br/>
                <button type="submit" onClick={handlePledgeSubmit}>
                  Make Pledge
                  </button>
            </form>
    </div>
  );
}

export default NewPledgeForm;
