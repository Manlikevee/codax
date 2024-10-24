import React from 'react';

function UserDetailsForm({ userdetails, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="miniforminput">
        <label htmlFor="first_name">First Name</label>
        <div className="miniforminputdata">
          <input
            type="text"
            name="first_name"
            value={userdetails[0].first_name}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>
      </div>

      <div className="miniforminput">
        <label htmlFor="last_name">Last Name</label>
        <div className="miniforminputdata">
          <input
            type="text"
            name="last_name"
            value={userdetails[0].last_name}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>
      </div>

      <div className="miniforminput">
        <label htmlFor="work_type">Work Type</label>
        <div className="miniforminputdata">
          <input
            type="text"
            name="work_type"
            value={userdetails[0].work_type}
            onChange={handleChange}
            placeholder="Enter Work Type"
          />
        </div>
      </div>

      <div className="miniforminput">
        <label htmlFor="joke">Joke</label>
        <div className="miniforminputdata">
          <textarea
            name="joke"
            value={userdetails[0].joke}
            onChange={handleChange}
            cols="30"
            rows="3"
            placeholder="Enter Joke"
          />
        </div>
      </div>

      <div className="miniforminput">
        <label htmlFor="experience_level">Experience Level</label>
        <div className="miniforminputdata">
          <input
            type="text"
            name="experience_level"
            value={userdetails[0].experience_level}
            onChange={handleChange}
            placeholder="Enter Experience Level"
          />
        </div>
      </div>

      <div className="miniforminput">
        <label htmlFor="model_name">Model Name</label>
        <div className="miniforminputdata">
          <input
            type="text"
            name="model_name"
            value={userdetails[0].model_name}
            onChange={handleChange}
            placeholder="Enter Model Name"
          />
        </div>
      </div>

      <div className="miniforminput">
        <label htmlFor="profile_summary">Profile Summary</label>
        <div className="miniforminputdata">
          <textarea
            name="profile_summary"
            value={userdetails[0].profile_summary}
            onChange={handleChange}
            cols="30"
            rows="5"
            placeholder="Enter Profile Summary"
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserDetailsForm;
