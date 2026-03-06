import { cn } from './lib/utils';
import { useForm, type SubmitHandler } from 'react-hook-form';
import iconError from '@/assets/images/icon-error.svg';

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <main>
      <article
        className={cn(
          'w-full max-w-[540px] xl:max-w-[1113px] h-[844px] xl:h-auto',
          'flex flex-col xl:flex-row gap-[64px] xl:gap-[48px] xl:justify-between xl:items-center',
        )}>
        <header className={cn('w-full xl:max-w-[525px]', 'flex flex-col gap-[16px]', 'text-white')}>
          <h1 className={cn('xl:h-[131px]', 'typo-preset-2 md:typo-preset-1 text-center xl:text-start')}>
            Learn to code by watching others
          </h1>
          <p className={cn('typo-preset-3 text-center xl:text-start')}>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
            understanding how developers think is invaluable.{' '}
          </p>
        </header>
        <section className={cn('w-full', 'flex flex-col gap-[24px]')}>
          {/* banner */}
          <div
            className={cn(
              'w-full h-[88px] md:h-[60px]',
              'flex justify-center items-center',
              'bg-purple-700 shadow-hard rounded-[10px]',
            )}>
            <p className={cn('w-[194px] md:w-auto h-[52px] md:h-auto', 'text-center typo-preset-4-regular text-white')}>
              <b>Try it free 7 days</b> then $20/mo. thereafter
            </p>
          </div>
          {/* form */}
          <div
            className={cn(
              'w-full min-h-[442px] p-[24px] md:px-[40px] md:py-[32px]',
              'bg-white shadow-hard rounded-[10px]',
            )}>
            <form className={cn('w-full', 'flex flex-col gap-[16px] md:gap-[24px]')} onSubmit={handleSubmit(onSubmit)}>
              <div className="relative flex flex-col gap-[5px]">
                <input
                  className={cn(
                    'w-full h-[56px] px-[24px] md:px-[32px] py-[16px]',
                    'border rounded-[5px] outline-none',
                    'typo-preset-4-regular text-gray-900',
                    'placeholder:typo-preset-4-regular placeholder:text-gray-900/75',
                    errors.firstName ? 'border-red-400' : 'border-gray-200',
                  )}
                  {...register('firstName', {
                    required: 'First Name cannot be empty',
                  })}
                  type="text"
                  placeholder="First Name"
                />
                {errors.firstName && <img className="absolute right-[32px] top-[15px]" src={iconError} alt="error" />}
                {errors.firstName && (
                  <span className="typo-preset-5-medium-italic text-red-400 self-end">{errors.firstName.message}</span>
                )}
              </div>
              <div className="relative flex flex-col gap-[5px]">
                <input
                  className={cn(
                    'w-full h-[56px] px-[24px] md:px-[32px] py-[16px]',
                    'border rounded-[5px] outline-none',
                    'typo-preset-4-regular text-gray-900',
                    'placeholder:typo-preset-4-regular placeholder:text-gray-900/75',
                    errors.lastName ? 'border-red-400' : 'border-gray-200',
                  )}
                  {...register('lastName', {
                    required: 'Last Name cannot be empty',
                  })}
                  type="text"
                  placeholder="Last Name"
                />
                {errors.lastName && <img className="absolute right-[32px] top-[15px]" src={iconError} alt="error" />}
                {errors.lastName && (
                  <span className="typo-preset-5-medium-italic text-red-400 self-end">{errors.lastName.message}</span>
                )}
              </div>
              <div className="relative flex flex-col gap-[5px]">
                <input
                  className={cn(
                    'w-full h-[56px] px-[24px] md:px-[32px] py-[16px]',
                    'border rounded-[5px] outline-none',
                    'typo-preset-4-regular text-gray-900',
                    'placeholder:typo-preset-4-regular',
                    errors.email ? 'border-red-400' : 'border-gray-200',
                    errors.email ? 'placeholder:text-red-400' : 'placeholder:text-gray-900/75',
                  )}
                  {...register('email', {
                    required: 'Email Address cannot be empty',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Looks like this is not an email',
                    },
                  })}
                  type="text"
                  placeholder={errors.email ? 'email@example/com' : 'Email Address'}
                />
                {errors.email && <img className="absolute right-[32px] top-[15px]" src={iconError} alt="error" />}
                {errors.email && (
                  <span className="typo-preset-5-medium-italic text-red-400 self-end">{errors.email.message}</span>
                )}
              </div>
              <div className="relative flex flex-col gap-[5px]">
                <input
                  className={cn(
                    'w-full h-[56px] px-[24px] md:px-[32px] py-[16px]',
                    'border rounded-[5px] outline-none',
                    'typo-preset-4-regular text-gray-900',
                    'placeholder:typo-preset-4-regular placeholder:text-gray-900/75',
                    errors.password ? 'border-red-400' : 'border-gray-200',
                  )}
                  {...register('password', {
                    required: 'Password cannot be empty',
                  })}
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <img className="absolute right-[32px] top-[15px]" src={iconError} alt="error" />}
                {errors.password && (
                  <span className="typo-preset-5-medium-italic text-red-400 self-end">{errors.password.message}</span>
                )}
              </div>
              <div className={cn('w-full', 'flex flex-col gap-[8px]')}>
                <button
                  className={cn(
                    'w-full h-[56px] px-[32px] py-[16px]',
                    'bg-green-400 rounded-[5px] shadow-hard-green-600 cursor-pointer',
                    'typo-preset-4-semibold text-white',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                  )}
                  type="submit"
                  disabled={Object.keys(errors).length > 0}>
                  CLAIM YOUR FREE TRIAL
                </button>
                <p className={cn('w-full', 'typo-preset-5-medium text-center text-purple-350')}>
                  By clicking the button, you are agreeing to our{' '}
                  <a href="#" className={cn('typo-preset-5-bold text-red-400')}>
                    Terms and Services
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}

export default App;
