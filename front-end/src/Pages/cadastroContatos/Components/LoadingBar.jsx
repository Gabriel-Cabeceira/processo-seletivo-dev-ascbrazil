export const LoadingBar = ({ loading }) => (
    <div style={{ height: "10px", backgroundColor: "#DDDDDD" }}>
        <div
            style={{
                height: "100%",
                width: `${loading}%`,
                backgroundColor: "green", // Altere a cor para verde conforme mencionado
                transition: "width 0.3s ease", // Adicione uma transição apenas se loading for verdadeiro
            }}
        ></div>
    </div>
);
