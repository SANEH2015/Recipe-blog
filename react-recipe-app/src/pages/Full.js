import { useParams } from "react-router-dom";

const Full = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipes = [
    {
      id: 1,
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
      description: "A delicious Chicken Pan Pizza made with fresh ingredients and love.",
    },
    {
      id: 2,
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
      description: "Classic Italian Spaghetti and Meatballs recipe with a tangy tomato sauce.",
    },
    {
      id: 3,
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
      description: "An all-time favorite American Cheese Burger with crispy fries.",
    },
    {
      id: 4,
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
      description: "Aromatic Mutton Biriyani cooked to perfection with rich spices.",
    },
    {
      id: 5,
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
      description: "Fresh and flavorful Japanese Sushi, prepared with traditional techniques.",
    },
  ];

  const recipe = recipes.find(r => r.id === parseInt(id)); // Find the recipe by ID

  if (!recipe) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5em",
          marginTop: "2em",
          color: "red",
        }}
      >
        Recipe not found!
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2em",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "var(--background-color)",
        borderRadius: "8px",
        boxShadow: "0 5px 15px var(--shadow-color)",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1em",
          color: "var(--primary-color)",
        }}
      >
        {recipe.title}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1.5em",
        }}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            objectFit: "cover",
            marginBottom: "1em",
            boxShadow: "0 4px 10px var(--shadow-color)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            marginTop: "1em",
          }}
        >
          <img
            src={recipe.authorImg}
            alt="Author"
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              border: "3px solid var(--background-light)",
              boxShadow: "0 1px 3px var(--shadow-color)",
            }}
          />
          <p style={{ fontSize: "1em", color: "var(--text-light)" }}>
            Recipe by: Author
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "1em",
          lineHeight: "1.6em",
          color: "var(--text-color)",
          textAlign: "justify",
          marginTop: "1em",
          letterSpacing: "0.5px",
        }}
      >
        {recipe.description}
      </p>
    </div>
  );
};

export default Full;
