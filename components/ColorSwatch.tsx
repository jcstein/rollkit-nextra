interface ColorSwatchProps {
    hexValue: string;
  }
  
  const ColorSwatch: React.FC<ColorSwatchProps> = ({ hexValue }) => {
    const swatchStyle = {
      width: '25px',
      height: '25px',
      backgroundColor: `#${hexValue}`,
      border: '1px solid currentColor',
      display: 'inline-block',
      margin: '10px'
    };
  
    return <div style={swatchStyle}></div>;
  };
  
  export default ColorSwatch;
  