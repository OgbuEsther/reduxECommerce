import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

import pic from "../ASSESTS/hero1.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allProduct } from "../Api/Api";

interface productsData {
  title: string;
  desc: string;
  price: number;
  quantity: number;
  category: string;
  status: boolean;
}

const Products = () => {
  const GetProducts = useQuery({
    queryKey: ["products"],
    queryFn: allProduct,
  });

  console.log(GetProducts);
  return (
    <Container>
      <Head>
        New Arrivals.{" "}
        <span style={{ color: "gray" }}>REY backpacks & bags</span>
      </Head>
      <Holder>
        {GetProducts?.data.map((props: any) => (
          <Card>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/details/`}
            >
              <MainImage>
                <ImageHold>
                  <Image src={pic} />
                </ImageHold>
                <Title>{props.title}</Title>
                <Desc>New design 2023</Desc>
                <PriceHold>
                  <Price>$props.price</Price>
                  <Ratting>
                    <AiFillStar
                      style={{
                        color: "gold",
                        marginRight: "10px",
                      }}
                    />
                    4.2(87 reviews)
                  </Ratting>
                </PriceHold>
              </MainImage>
            </Link>
          </Card>
        ))}
      </Holder>
    </Container>
  );
};

export default Products;

const Card = styled.div`
  margin: 10px;
`;
const ImageHold = styled.div`
  height: 250px;
  width: 250px;
  background-color: #f7f9fb;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 10px;
`;
const Desc = styled.div`
  color: gray;
`;
const PriceHold = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
`;
const Price = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  font-weight: 600;
  color: green;
  border-radius: 5px;
`;
const Ratting = styled.div`
  font-size: 13px;
  color: gray;
  display: flex;

  align-items: center;
`;
const MainImage = styled.div``;
const Image = styled.img`
  width: 150px;
`;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 70px;
`;

const Head = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Container = styled.div`
  margin-top: 100px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  overflow: hidden;
  margin-bottom: 50px;
  border-bottom: 1px solid silver;
`;
