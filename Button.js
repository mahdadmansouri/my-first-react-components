const Input = ({ placeholder, label, disabled = false }) => {
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input type="email" className="form-control" placeholder={placeholder} disabled={disabled} />
      </div>
    );
  };

  const Button = ({ disabled = false, primary, secondary, outline, large, }) => {
    let className = [
      'btn',
      primary ? 'btn-primary' : '',
      secondary ? 'btn-secondary' : '',
      outline ? 'btn-outline-primary' : '',
      large ? 'btn-lg' : '',

    ].join(' ');






    return <button className={className} disabled={disabled}>Mahdad</button>;
  };

  const Text = ({ children }) => {
    return <p> {children} </p>;
  }

  const App = () => {
    return (
      <div>
        <Input placeholder="phone number" />
        <Input placeholder="Mobile number" disabled />
        <Button primary />
        <Button secondary />
        <Button disabled />
        <Button outline />
        <Button large />
        <Text>hi khoobi?</Text>
      </div>
    );
  };
  ReactDOM.render(<App />, document.getElementById("root"));