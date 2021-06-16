import Toggle from './Toggle';

function Controls({ onDarkModeToggle = () => {}, toggleIsOn = false }) {
  return (
    <section style={{ backgroundColor: toggleIsOn ? '#201F1F' : '#F5F5F5' }} className="flex items-center justify-end p-4">
      <Toggle on={toggleIsOn} onToggle={onDarkModeToggle} />
    </section>
  );
}

export default Controls;
