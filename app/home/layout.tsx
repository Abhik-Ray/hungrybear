"use client";

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import FoodCard from "./FoodCard";

export default function HomepageLayout() {
  return (
    <div>
      <Navbar position="static">
        <NavbarBrand>
          <h1>HB</h1>
          <p className="font-bold text-inherit">HungryBear</p>
        </NavbarBrand>
        <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
      <h1>Homepage</h1>
    </div>
  );
}
