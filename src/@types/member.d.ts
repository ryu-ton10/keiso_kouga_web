declare module "keisoKougaWebData" {

  /* メンバーの作例写真の型定義 */
  export type MemberWork = {
    webp: string;
    jpeg: string;
    pre_webp: string;
    pre_jpeg: string;
  }
  
  /* メンバーのサムネイル写真の型定義 */
  export type MemberIcon = {
    webp: string;
    jpeg: string;
  }
  
  /* メンバーの型定義 */
  export type Member = {
    id: string;
    name: string;
    icon: MemberIcon;
    works: MemberWork[];
    twitter_url: string;
    keywords: string[];
    camera: string;
  }
}
