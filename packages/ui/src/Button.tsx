import style from './Button.module.css';

export const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={style.btn} onClick={onClick}> 
        Test Button
    </button>
    );
};