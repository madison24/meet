const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    let errorMessage;
    if (isNaN(value) || value <= 0) {
      errorMessage = "The number must be higher than 0";
      setErrorAlert(errorMessage);
    } else {
      errorMessage = "";
      setErrorAlert(errorMessage);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input"># of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue={32}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
