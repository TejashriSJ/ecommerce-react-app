function DisplayPrompt(props) {
  return (
    <div className="prompt d-block mx-auto">
      <p>Are you sure you want to remove the item</p>
      <div>
        <button id={props.id} name="yes" onClick={props.displayPrompt}>
          Yes
        </button>
        <button name="no" onClick={props.displayPrompt}>
          No
        </button>
      </div>
    </div>
  );
}

export default DisplayPrompt;
