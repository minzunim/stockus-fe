import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // 1. @typescript-eslint/no-unused-vars (사용하지 않는 변수)
      //    -> 'warn'으로 변경하고, '_'로 시작하는 변수는 무시
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],

      // 2. @typescript-eslint/no-explicit-any (any 타입 사용)
      //    -> 'warn'으로 변경. (any 사용 시 경고만 띄움)
      "@typescript-eslint/no-explicit-any": "warn",

      // 3. @next/next/no-img-element (<img/> 태그 사용 대신 <Image/> 권장)
      //    -> 'warn'으로 변경. (빌드를 막지 않고 경고만 띄움)
      "@next/next/no-img-element": "warn",

      // 4. jsx-a11y/alt-text (img 태그에 alt 속성 누락)
      //    -> 'warn'으로 변경. (접근성을 위해 중요하므로 끄기보다는 경고로 유지 권장)
      "jsx-a11y/alt-text": "warn",

      // 만약 다른 규칙도 warn으로 바꾸고 싶다면 여기에 추가
      // 예시: "no-console": "warn"
    }
  }
];

export default eslintConfig;