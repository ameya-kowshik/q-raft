import { render, screen } from "@testing-library/react";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";
import { CONTACT } from "@/lib/contact";

describe("ContactSection", () => {
  it("renders without crashing", () => {
    render(<ContactSection />);
  });

  it("renders WhatsApp link with https://wa.me/ scheme", () => {
    render(<ContactSection />);
    const waLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("https://wa.me/"));
    expect(waLinks.length).toBeGreaterThan(0);
  });

  it("renders email link with mailto: scheme", () => {
    render(<ContactSection />);
    const emailLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("mailto:"));
    expect(emailLinks.length).toBeGreaterThan(0);
  });

  it("renders phone link with tel: scheme", () => {
    render(<ContactSection />);
    const phoneLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("tel:"));
    expect(phoneLinks.length).toBeGreaterThan(0);
  });

  it("WhatsApp link does not contain text= query parameter", () => {
    render(<ContactSection />);
    const waLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("https://wa.me/"));
    waLinks.forEach((link) => {
      expect((link as HTMLAnchorElement).href).not.toContain("text=");
    });
  });
});

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders WhatsApp link with https://wa.me/ scheme", () => {
    render(<Footer />);
    const waLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("https://wa.me/"));
    expect(waLinks.length).toBeGreaterThan(0);
  });

  it("renders email link with mailto: scheme", () => {
    render(<Footer />);
    const emailLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("mailto:"));
    expect(emailLinks.length).toBeGreaterThan(0);
  });

  it("renders phone link with tel: scheme", () => {
    render(<Footer />);
    const phoneLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("tel:"));
    expect(phoneLinks.length).toBeGreaterThan(0);
  });

  it("WhatsApp link does not contain text= query parameter", () => {
    render(<Footer />);
    const waLinks = screen
      .getAllByRole("link")
      .filter((a) => (a as HTMLAnchorElement).href.startsWith("https://wa.me/"));
    waLinks.forEach((link) => {
      expect((link as HTMLAnchorElement).href).not.toContain("text=");
    });
  });
});
