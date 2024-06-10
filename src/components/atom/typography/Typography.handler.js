
export const handleTypography = (contend, type) => {
    return type === 'h1' ? <h1>{contend}</h1> :
    type === 'h2' ? <h2>{contend}</h2> :
    type === 'h3' ? <h3>{contend}</h3> :
    <p>{contend}</p>
}
