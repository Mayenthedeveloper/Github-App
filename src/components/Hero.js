import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
import Container from "./Container";
import Nav from "./Nav";
import User from "./User";

function Hero() {
  const { user } = useContext(GithubContext);

  return (
    <section className="hero">
      <Nav />
      <Container>{user ? <User /> : <p>No user</p>}</Container>
    </section>
  );
}

export default Hero;
