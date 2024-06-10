import { handleTypography } from "./Typography.handler"

export const Typography = ({
    type, //Type of the typography can be h1, h2, h3,
    contend, //Content of the article(String)
}) => {
  return (
    <>
        {handleTypography(contend, type)}
    </>
  )
}
