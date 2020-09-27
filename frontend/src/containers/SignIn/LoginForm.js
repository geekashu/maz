import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";


const LoginForm = ({onSubmit}) => {
    const loginSchema = useMemo(
        () =>
            yup.object().shape({
                username: yup.string().required(),
                password: yup.string().required(),
            }),
        []
    );

    const { register, handleSubmit, errors, formState } = useForm({
        mode: 'all',
        resolver: yupResolver(loginSchema),
    });

    const { isValid, isSubmitting } = formState;

    return (
        <div className="col-xs-12 col-sm-12">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <fieldset>
                    <TextField
                        name="username"
                        type="text"
                        variant="outlined"
                        inputRef={register}
                        label="Email/Username"
                        margin="normal"
                        className="mt-4 mb-3"
                        error={!!errors.username}
                        helperText={errors.username ? errors.username.message : ''}
                        fullWidth
                        required />

                    <TextField
                        name="password"
                        type="password"
                        variant="outlined"
                        inputRef={register}
                        label="Password"
                        margin="normal"
                        className="mb-4"
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                        fullWidth
                        required />

                    <div>
                        <Button type="submit" variant="contained" color="primary" fullWidth className="mt-3 jr-btn-lg"
                                disabled={!isValid || isSubmitting}>
                            Let Me In
                        </Button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default LoginForm;
