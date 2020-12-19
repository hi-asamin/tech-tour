// apiのリクエストを定義
export type DummyAPIPostData = {
  value?: string;
}

// apiのレスポンスを定義
export type DummyResponse = {
  result?: string;
}

export type DummyState = {
  label?: string;
  form: DummyForm;
}

export type DummyForm = {
  values?: DummyFormValues;
  status: DummyFormStatus;
}

export type DummyFormValues = {
  value: string;
}

export enum DummyFormStatus {
  default,
  success,
  failed
}

export const initialDummyState: DummyState = {
  form: {
    status: DummyFormStatus.default,
  }
};