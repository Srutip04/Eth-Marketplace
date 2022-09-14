export { default as CourseHero } from "./hero";
export { default as Curriculum } from "./curriculum";
export { default as Keypoints } from "./keypoints";

export default function Course() {
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <CourseHero />
      <Keypoints />
      <Curriculum />
      <Modal />
    </div>
  );
}
